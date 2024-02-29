import React from 'react';

export default function Ourteam() {
    const imagesData = [
        {
            id: 1,
            name: 'Person 1',
            designation: 'Engineer',
            imageUrl: 'https://st2.depositphotos.com/2783505/9427/i/950/depositphotos_94278920-stock-photo-passport-picture-of-a-blonde.jpg',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        },
        {
            id: 2,
            name: 'Person 2',
            designation: 'Designer',
            imageUrl: 'https://images.wisetour.com/passport-photo.jpg',
            message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            id: 3,
            name: 'Person 3',
            designation: 'Photographer',
            imageUrl: 'https://images.wisetour.com/passport-photo.jpg',
            message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        },
    ];

    return (
        <>
            <h1 className="responsive-heading">Our Team</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {imagesData.map((image) => (
                    <div key={image.id} style={{ textAlign: 'center', margin: '20px' }}>
                        <img
                            src={image.imageUrl}
                            alt={`Person ${image.id}`}
                            style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <br />
                        {image.name}
                        <br />
                        {image.designation}
                        <p style={{ marginTop: '10px', fontSize: '14px', fontStyle: 'italic' }}>{image.message}</p>
                        <p style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>

                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};
