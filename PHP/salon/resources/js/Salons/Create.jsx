import { useState } from 'react';
import { useContext } from 'react';
import { SalonContext } from '@/Salons/SalonProvider';

export default function Create() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const { setSalonCreate } = useContext(SalonContext);

    const create = _ => {
        setSalonCreate({name, address, phone});
        setName('');
        setAddress('');
        setPhone('');
    }

    return (
        <div className="card mt-5">
            <div className="card-header">
                New Salon
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Salon Name</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salon Address</label>
                    <input type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Salon Phone</label>
                    <input type="text" className="form-control" value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-outline-primary" onClick={create}>Add New</button>
                </div>
            </div>
        </div>

    );

}


