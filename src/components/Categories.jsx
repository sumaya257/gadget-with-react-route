import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    // Get unique category names
    const uniqueCategories = [...new Set(categories.map(category => category.category))];
    console.log(uniqueCategories);

    return (
        <div>
            {/* categories name */}
            <div className='flex flex-col gap-2 bg-gray-100 p-5'>
                <NavLink
                    to="/"  // Link for All Products
                    className={({ isActive }) =>
                        `btn ${isActive ? 'bg-[#9538E2] text-white' : 'bg-white text-gray-600'}`
                    }
                >
                    All Products
                </NavLink>
                {uniqueCategories.map(category => (
                    <NavLink
                        to={`/category/${category}`}
                        key={category}  // Use category as the unique key
                        className={({ isActive }) =>
                            `btn ${isActive ? 'bg-[#9538E2] text-white' : 'bg-white text-gray-600'}`
                        }
                    >
                        {category}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;
