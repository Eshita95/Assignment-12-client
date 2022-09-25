import { signOut } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const item = {
            name: data.productName,
            price: data.productPrice,
            image: data.productImage,
            description: data.productDescription,
            minQty: data.minQty,
            availableQty: data.availableQty
        };

        console.log(item)

        fetch('https://assignment-12-server-g2z9.vercel.app/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(item)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json();
            })
            .then(toolInserted => {
                if (toolInserted.insertedId) {
                    toast('Product added successfully',
                        {
                            icon: '✅',
                            style: {
                                borderRadius: '10px',
                                border: '1px solid #06A877',
                                marginTop: '-2px',
                                background: '#0B1322',
                                color: '#fff',
                            },
                        }
                    );
                    reset();
                } else {
                    toast('Something went wrong! Please try again',
                        {
                            icon: '❌',
                            style: {
                                borderRadius: '10px',
                                border: '1px solid #06A877',
                                marginTop: '-2px',
                                background: '#0B1322',
                                color: '#fff',
                            },
                        }
                    );
                }
            })
    }

    return (
        <div className='h-full w-full mt-16'>
            <div className='flex-row text-neutral md:pl-20 pl-5 w-full items-start'>
                <h1 className='text-3xl mb-2'>Add Product</h1>
                <span className='w-52 h-1 bg-secondary block lg:mb-16 mb-12'></span>
            </div>
            <div className='w-full md:px-20 px-5 items-center text-neutral'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-20'>
                        <div>
                            <div className="form-control">
                                <span className="label-text text-xl text-neutral mb-3">Name</span>
                                <input
                                    type="text"
                                    placeholder="Enter product name"
                                    autoComplete='off'
                                    {...register("productName", {
                                        required: {
                                            value: true,
                                            message: 'Product name is required'
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Product name must be contain at least 3 characters'
                                        }
                                    })}
                                    className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                                <label className="mt-1">
                                    {errors.productName?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.productName.message}</span>}
                                    {errors.productName?.type === 'pattern' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.productName.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <span className="label-text text-xl text-neutral mb-3 mt-8">Image</span>
                                <input
                                    type="text"
                                    autoComplete='off'
                                    placeholder="Enter product image link"
                                    {...register("productImage", {
                                        required: {
                                            value: true,
                                            message: 'Product image is required'
                                        }
                                    })}
                                    className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                                <label className="mt-1">
                                    {errors.productImage?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.productImage.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <span className="label-text text-xl text-neutral mb-3 mt-8">Price</span>
                                <input
                                    type="number"
                                    placeholder="Enter product price"
                                    {...register("productPrice", {
                                        required: {
                                            value: true,
                                            message: 'Product price is required'
                                        }
                                    })}
                                    className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                                <label className="mt-1">
                                    {errors.productPrice?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.productPrice.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control grid sm:grid-cols-2 grid-cols-1 gap-10">
                                <div>
                                    <span className="label-text text-xl text-neutral mb-3 block">Min. Quantity</span>
                                    <input
                                        type="number"
                                        placeholder="Product minimum quantity"
                                        {...register("minQty", {
                                            required: {
                                                value: true,
                                                message: 'Product min. quantity is required'
                                            }
                                        })}
                                        className="bg-transparent w-full border-b-2 border-neutral pb-1 outline-none" />
                                    <label className="mt-1">
                                        {errors.minQty?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.minQty.message}</span>}
                                    </label>
                                </div>
                                <div>
                                    <span className="label-text text-xl text-neutral mb-3 block">Available Quantity</span>
                                    <input
                                        type="number"
                                        placeholder="Product available quantity"
                                        {...register("availableQty", {
                                            required: {
                                                value: true,
                                                message: 'Product available quantity is required'
                                            }
                                        })}
                                        className="bg-transparent w-full border-b-2 border-neutral pb-1 outline-none" />
                                    <label className="mt-1">
                                        {errors.availableQty?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.availableQty.message}</span>}
                                    </label>
                                </div>
                            </div>

                            <div className="form-control">
                                <span className="label-text text-xl text-neutral mb-3 mt-8">Description</span>
                                <textarea
                                    type="text"
                                    rows="5"
                                    cols="0"
                                    placeholder="Write your product description here.."
                                    {...register("productDescription", {
                                        required: {
                                            value: true,
                                            message: 'Review description is required'
                                        },
                                        maxLength: {
                                            value: 250,
                                            message: 'You can only write 250 characters'
                                        }
                                    })}
                                    autoComplete='off'
                                    className="border-2 border-gray-400 bg-transparent rounded-md py-2 px-3 focus:border-2 focus:border-indigo-300 focus:outline-0" />
                                <label className="mt-1">
                                    {errors.productDescription?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.productDescription.message}</span>}
                                    {errors.productDescription?.type === 'maxLength' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.productDescription.message}</span>}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-control w-1/2 mx-auto md:mt-20 mt-5 py-8">
                        <button className="btn btn-secondary">Add Product</button>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default AddProduct;