import ProductCard from './ProductCard.jsx';

function Home() {
    return (
        <>
            <div id='pagecontent'>
                <ProductCard 
                    name="💄 A smooth, long-lasting lipstick to enhance your beauty with vibrant shades." 
                    price={599} 
                    imageMap={{
                        Red: '/lipstick-red.jpeg',
                        Pink: '/lipstick-pink.jpeg',
                        Nude: '/lipstick-nude.jpeg',
                        Brown: '/lipstick-brown.jpeg'
                    }}
                    options={['Red', 'Pink', 'Nude', 'Brown']}
                />

                <ProductCard 
                    name="✨ High-coverage foundation for a flawless and radiant skin finish." 
                    price={899} 
                    imageMap={{
                        Fair: '/foundation-fair.jpeg',
                        Medium: '/foundation-medium.jpeg',
                        Dark: '/foundation-dark.jpeg'
                    }}
                    options={['Fair', 'Medium', 'Dark']}
                />

                <ProductCard 
                    name="🎨 A colorful eyeshadow palette to create stunning eye makeup looks." 
                    price={1299} 
                    imageMap={{
                        Matte: '/eyeshadow-matte.jpeg',
                        Shimmer: '/eyeshadow-shimmer.jpeg',
                        Glitter: '/eyeshadow-glitter.jpeg'
                    }}
                    options={['Matte', 'Shimmer', 'Glitter']}
                />

                <ProductCard 
                    name="🌸 A luxurious perfume with a mesmerizing fragrance that lasts long." 
                    price={1599} 
                    imageMap={{
                        Floral: '/perfume-floral.jpeg',
                        Woody: '/perfume-woody.jpeg',
                        Fruity: '/perfume-fruity.jpeg'
                    }}
                    options={['Floral', 'Woody', 'Fruity']}
                />
            </div>
        </>
    );
}

export default Home;
