import React from 'react';

const Blogs = () => {
    return (
        <div className='container w-50'>
            <h1 className='mt-3'>1. Difference between javascript and nodejs</h1>
            <p className='mt-2'>ANS:
                <br></br>
                1. JavaScript is a programming language that runs in any browser where Node JS runs environment for a JavaScript.
                <br></br>
                2. JavaScript is mainly used for Client side activity where Node JS is used for server side activity.
                <br />
                3. JavaScript can add HTML tags where NodeJs can not.
                <br />
            </p>

            <h1 className='mt-3'>
                2. When should you use nodejs and when should you use mongodb
            </h1>
            <p className='mt-2'>
                ANS:
                <br />
                MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site. To store data we use MongoDB and to access it we can use Node JS.
            </p>

            <h1 className='mt-3'>
                3. Differences between sql and nosql databases.
            </h1>
            <p className='mt-2'>
                ANS:
                <br />
                1. SQL databases are relational, NoSQL databases are non-relational.
                <br />
                2. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data
                <br />
                3. SQL is Vertically Scalable where NoSQL is Horizontally Scalable.
                <br />
            </p>

            <h1 className='mt-3'>
                4. What is the purpose of jwt and how does it work
            </h1>

            <p className='mt-2'>
                ANS:
                <br />
                JWT, or JSON Web Token, is an open standard used to share security information between two parties which are a client and a server. JWT can be used for Authentication, Authorization and Data Exchanges.
                <br />
                The structure of JWT is:
                <br />
                1. Header
                <br />
                2. Payload
                <br />
                3. Signature

            </p>


        </div>
    );
};

export default Blogs;