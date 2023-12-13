import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg"
          alt=""
        />
      </div>

      <div className="texts">
        <h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          molestiae maiores veritatis amet odit neque quidem numquam, rerum
          modi. Animi.
        </h2>
        <p className="info">
          <a href="/" className="info">
            Bhupendar
          </a>
          <time>juju</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          repudiandae atque? Provident itaque vero veniam, facere sed iste iure
          neque, voluptas necessitatibus aliquid animi officiis cum! Qui,
          dolorum. Nobis ipsa hic inventore quae sed esse fuga dolorem eos?
          Natus quod rem dolore doloremque at? Et perferendis fuga dolor facere
          minima!
        </p>
      </div>
    </div>
  );
};

export default Post;
