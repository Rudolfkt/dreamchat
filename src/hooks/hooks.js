import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../Services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import LoginStrings from '../Pages/Login/LoginStrings';

// signup logic hook 
export function useSignup() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();    

    const signup = async (email, password, name) => {
        setError(null);
        setLoading(true);
        try {
            // Create the Firebase Auth account
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;

            // Save info to localStorage
            localStorage.setItem(LoginStrings.ID, uid);
            localStorage.setItem(LoginStrings.Name, name);
            localStorage.setItem(LoginStrings.Email, email);
            localStorage.setItem(LoginStrings.PhotoURL, '');
            localStorage.setItem(LoginStrings.UPLOAD_CHANGED, 'state_changed');
            localStorage.setItem(LoginStrings.Description, '');

            // Save user data to Firestore (non-blocking)
            try {
                const docRef = await addDoc(collection(firestore, 'users'), {
                    name,
                    id: uid,
                    email,
                    URL: '',
                    messages: [{ notificationId: '', number: 0 }],
                });
                localStorage.setItem(LoginStrings.FirebaseDocumentId, docRef.id);
            } catch (dbErr) {
                console.warn('Firestore write failed:', dbErr.message);
            }

            // Nav to Chat
            navigate('/Chat');
        } catch (err) {
            console.error('signup error', err);
            setError(err?.message || 'Error signing up. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return { signup, error, loading };
}
