import React from 'react';

const Form = () => {
    return (
        <form className='m-20'>
            <div className="w-1/2 space-y-8">
                <div className="border-b border-gray-900/10 pb-8">
                    <h2 className="text-lg font-semibold leading-6 text-gray-900">Profile</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly, so be careful what you share.
                    </p>

                    <div className="mt-6 space-y-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="email1" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email1"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:border-primary-200 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email2" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email2"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:border-primary-200 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                            <div className="mt-1">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full h-10 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-600 sm:max-w-xs sm:text-sm"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email3" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email3"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:border-primary-200 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;
