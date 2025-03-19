import React, { useState, useRef, useEffect } from 'react';
import './ProfileEditor.css';

const ProfileEditor = ({ initialName = 'Your Name', initialPhoto = 'https://via.placeholder.com/150', onProfileUpdate }) => {
    const [name, setName] = useState(initialName);
    const [photo, setPhoto] = useState(initialPhoto);
    const [showModal, setShowModal] = useState(false);
    const [cameraActive, setCameraActive] = useState(false);
    const [editing, setEditing] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        // Propagate profile changes (photo and name) to the parent.
        onProfileUpdate && onProfileUpdate({ name, photo });
    }, [name, photo, onProfileUpdate]);

    // Start camera when cameraActive is set to true.
    useEffect(() => {
        let stream;
        if (cameraActive && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((s) => {
                    stream = s;
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                        videoRef.current.play();
                    }
                })
                .catch((err) => console.error("Error accessing camera:", err));
        }
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [cameraActive]);

    // Handlers for modal options
    const handleUpload = () => {
        setShowModal(false);
        fileInputRef.current.click();
    };

    const handleCamera = () => {
        setShowModal(false);
        setCameraActive(true);
    };

    const handleEdit = () => {
        setShowModal(false);
        // Trigger a simple animation effect as "edit"
        setEditing(true);
        setTimeout(() => {
            setEditing(false);
        }, 1000);
    };

    const handleCapture = () => {
        if (videoRef.current && canvasRef.current) {
            const width = videoRef.current.videoWidth;
            const height = videoRef.current.videoHeight;
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            const ctx = canvasRef.current.getContext('2d');
            ctx.drawImage(videoRef.current, 0, 0, width, height);
            const dataUrl = canvasRef.current.toDataURL('image/png');
            setPhoto(dataUrl);
            setCameraActive(false);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPhoto(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-editor">
            <h2>Edit Profile</h2>
            <div className="editor-container">
                <div 
                    className={`profile-photo-container ${editing ? 'editing' : ''}`}
                    onClick={() => setShowModal(true)}
                >
                    <img src={photo} alt="Profile" className="profile-photo" />
                </div>
                <input 
                    type="file" 
                    accept="image/*" 
                    ref={fileInputRef} 
                    style={{ display: 'none' }} 
                    onChange={handleFileChange} 
                />
                {cameraActive && (
                    <div className="camera-container">
                        <video ref={videoRef} className="camera-video"></video>
                        <button onClick={handleCapture} className="capture-btn">Capture</button>
                        <button onClick={() => setCameraActive(false)} className="cancel-btn">Cancel</button>
                        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
                    </div>
                )}
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter your name" 
                />
                <button className="save-btn">Save</button>
            </div>

            {/* Modal for photo action selection */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Change Profile Photo</h3>
                        <button onClick={handleUpload}>Upload Photo</button>
                        <button onClick={handleCamera}>Open Camera</button>
                        <button onClick={handleEdit}>Edit Photo</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileEditor;