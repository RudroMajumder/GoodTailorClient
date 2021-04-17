import React from 'react';

const About = () => {
    return (
        <section className="mt-5">
            <div className="container mt-5">
                <h1 className="text-center"> About Us </h1>
                <hr style={{width:"100%",margin:"auto"}} />
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <p><big>In tristique sapien ut sem aliquet pellentesque. Donec sed interdum ex. Nunc semper posuere neque at condimentum. Fusce pretium sit amet est eu feugiat. Curabitur diam diam, accumsan sit amet nibh sed, volutpat posuere justo. Aliquam tempus posuere eros ac bibendum. Vivamus in augue sit amet lectus consectetur consequat. Nunc molestie sem est, mattis pulvinar nisi luctus facilisis.</big></p>
                    </div>
                    <div className="col-sm-6 col-md-6">
                    <p><big>Nullam fermentum ex at neque aliquam, in ullamcorper neque laoreet. Fusce commodo ultricies massa, vitae feugiat massa iaculis ut. Donec interdum finibus erat, nec condimentum dui fermentum ac. Sed lectus tellus, posuere semper gravida ut, volutpat et ante. Maecenas eu eros in magna interdum hendrerit et nec nisl.</big></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;