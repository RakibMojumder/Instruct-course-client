import React from 'react';
import { TextInput, Label } from 'flowbite-react';

const Register = () => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="small"
                        value="Small input"
                    />
                </div>
                <TextInput
                    id="small"
                    type="text"
                    sizing="sm"
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="base"
                        value="Base input"
                    />
                </div>
                <TextInput
                    id="base"
                    type="text"
                    sizing="md"
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="large"
                        value="Large input"
                    />
                </div>
                <TextInput
                    id="large"
                    type="text"
                    sizing="lg"
                />
            </div>
        </div>
    );
};

export default Register;