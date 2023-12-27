import React, { useState } from "react";
import "./style.scss";

const DetailsPage = () => {
  const [id, setId] = useState(null);
  // console.log(req.params)
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="titleDiv">
            
            <h2>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              facilis."
            </h2>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex sequi
              dolorem quisquam vel officia fugiat saepe optio rem non.
              Doloribus, atque asperiores sed culpa eos odit mollitia soluta ea
              nostrum.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="posterDiv">
            <img
              src="https://www.livemint.com/lm-img/img/2023/12/20/600x338/MarketUnsplash_1685699235833_1703065712219.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="scrollDown">
        <div class="field">
          <div class="scroll"></div>
        </div>
        {/* <p>Read More Below</p> */}
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat optio ab voluptates neque soluta, quia vero unde necessitatibus explicabo labore ipsa animi deleniti beatae? Accusantium, eaque dolorem! Obcaecati nam voluptatibus, sit sunt repellendus explicabo distinctio iste exercitationem dolor beatae repellat nesciunt quasi laudantium? Eum eos ea, illum animi ducimus culpa nobis repudiandae et quia amet omnis rerum esse sit? Vero quia beatae adipisci. Veniam maiores voluptates tempore asperiores repellat ratione voluptate, facilis amet dolore laboriosam eveniet doloribus iste delectus et? Distinctio, laboriosam, quibusdam, architecto tenetur ipsa commodi placeat non illo voluptas necessitatibus labore blanditiis dolores iure quam quas excepturi nihil minima atque. Officiis, eveniet magnam ratione minima sed harum dignissimos cumque animi, delectus voluptates architecto id odit. Velit quas minus ducimus illo, sit quos, in soluta veniam distinctio quibusdam dolore voluptatum autem maxime. Omnis dolore corporis aspernatur placeat ducimus? Enim laborum molestias odit perferendis officiis quae. Eligendi, quisquam animi nemo porro nisi alias blanditiis. Amet recusandae quod velit soluta corporis, reiciendis ipsa numquam doloremque sequi quasi. Totam modi labore placeat praesentium ducimus, inventore quas et suscipit voluptatibus quisquam. Ab blanditiis magnam asperiores assumenda fugiat libero in itaque eos dolorem perferendis molestiae eius maiores, quibusdam rerum architecto aliquid voluptas expedita? Quidem minima vero numquam nisi repudiandae ipsam neque tempora placeat ex necessitatibus suscipit fuga est doloribus animi quaerat accusantium, earum velit soluta inventore eveniet eum labore? Odit magnam, totam eligendi quibusdam perferendis possimus? Atque inventore, natus quos, cumque temporibus minima non asperiores aspernatur sit autem consequuntur odio quod voluptatum nam quaerat. Ex ab perferendis qui iste maiores vitae illum adipisci necessitatibus, delectus aliquam a iusto culpa natus quae excepturi, earum saepe. Cupiditate tenetur rerum ea illum, repudiandae qui voluptates eaque, dolore sapiente repellat repellendus hic assumenda. Laboriosam omnis excepturi beatae. Aut reiciendis ratione nisi commodi sunt iusto delectus quos nostrum!
        </p>
      </div>
    </>
  );
};

export default DetailsPage;
