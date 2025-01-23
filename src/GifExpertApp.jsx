import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    // Ponerle valor inicial pq a veces genera errores.
    const [categories, setCategories] = useState(['Lord of the Rings']);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory)) return; 

        setCategories([...categories, newCategory]);

    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
              onNewCategory= { (value) => onAddCategory(value) }  
            />

            {
                categories.map( category => 
                    (
                        <GifGrid 
                            key={ category } 
                            category={ category }
                        />
                    )
                )
            }


        </>
    );
};
