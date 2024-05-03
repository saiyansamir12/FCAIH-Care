import CategoryApi from '../../utils/api/CategoryApi';
import userApi from '../../utils/api/CategoryApi';
import React, { useEffect, useState } from 'react';

function Users() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const categories = await CategoryApi.getProductCategories();
            setData(categories);
        };
        fetchData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>CategoryID</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {data.map((categories, index) => (
                    <tr key={index}>
                        <td>{categories.productCategoryID}</td>
                        <td>{categories.category} {categories.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Users;
