import React from "react";

export default function IshOrinlari() {
  return <div>IshOrinlari</div>;
  import React, { useState } from "react";

export default function VacanciesPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, sans-serif;
        }

        body{
          background:#f5f5f5;
        }

        .vacancies-page{
          width:100%;
          padding:40px 0 80px;
        }

        .container{
          width:90%;
          max-width:1120px;
          margin:auto;
        }

        .breadcrumb{
          font-size:14px;
          color:#999;
          margin-bottom:20px;
        }

        .breadcrumb span{
          margin:0 8px;
        }

        .title{
          font-size:52px;
          font-weight:700;
          color:#111;
          margin-bottom:28px;
        }

        .hero{
          width:100%;
          height:520px;
          border-radius:18px;
          overflow:hidden;
          background:#f7c52d;
          margin-bottom:35px;
        }

        .hero img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .content h3{
          font-size:28px;
          margin-bottom:24px;
          line-height:1.5;
          color:#111;
        }

        .content h4{
          margin-top:28px;
          margin-bottom:14px;
          font-size:23px;
          color:#111;
        }

        .content p{
          font-size:17px;
          line-height:1.9;
          color:#555;
          margin-bottom:18px;
        }

        .content strong{
          color:#111;
        }

        .button-wrapper{
          display:flex;
          justify-content:center;
          margin-top:45px;
        }

        .apply-btn{
          background:#ff2e2e;
          border:3px solid #1565ff;
          color:white;
          padding:15px 42px;
          border-radius:40px;
          font-size:18px;
          font-weight:700;
          cursor:pointer;
          transition:0.3s;
        }

        .apply-btn:hover{
          transform:scale(1.05);
        }

        /* MODAL */

        .modal-overlay{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,0.55);
          display:flex;
          justify-content:center;
          align-items:center;
          z-index:999;
          padding:20px;
        }

        .modal{
          width:100%;
          max-width:720px;
          background:white;
          border-radius:18px;
          padding:32px;
          position:relative;
          animation:popup .25s ease;
        }

        @keyframes popup{
          from{
            transform:scale(.8);
            opacity:0;
          }
          to{
            transform:scale(1);
            opacity:1;
          }
        }

        .close-btn{
          position:absolute;
          top:18px;
          right:18px;
          width:44px;
          height:44px;
          border-radius:50%;
          border:2px solid #1565ff;
          background:white;
          color:#1565ff;
          font-size:28px;
          cursor:pointer;
        }

        .modal h2{
          font-size:38px;
          margin-bottom:30px;
          color:#111;
        }

        .form-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:16px;
        }

        .form-grid input,
        .form-grid select,
        .form-grid textarea{
          width:100%;
          border:1px solid #d7d7d7;
          border-radius:10px;
          padding:14px 16px;
          font-size:15px;
          outline:none;
        }

        .form-grid textarea{
          resize:none;
        }

        .full{
          grid-column:span 2;
        }

        .gender-box{
          border:1px solid #d7d7d7;
          border-radius:10px;
          padding:14px 16px;
          display:flex;
          align-items:center;
          gap:16px;
          color:#666;
        }

        .gender-box label{
          display:flex;
          align-items:center;
          gap:6px;
          font-size:14px;
        }

        .submit-btn{
          width:100%;
          height:56px;
          border:none;
          border-radius:12px;
          background:#38a34b;
          color:white;
          font-size:18px;
          font-weight:700;
          margin-top:24px;
          cursor:pointer;
          transition:0.3s;
        }

        .submit-btn:hover{
          background:#2f8f40;
        }

        @media(max-width:768px){

          .title{
            font-size:38px;
          }

          .hero{
            height:auto;
          }

          .form-grid{
            grid-template-columns:1fr;
          }

          .full{
            grid-column:span 1;
          }

          .modal{
            padding:22px;
          }

          .modal h2{
            font-size:30px;
          }

          .gender-box{
            flex-wrap:wrap;
          }
        }
      `}</style>

      <div className="vacancies-page">

        <div className="container">

          <div className="breadcrumb">
            Главная <span>›</span> Вакансии
          </div>

          <h1 className="title">Вакансии</h1>

          <div className="hero">
            <img
              src="https://i.imgur.com/6VBx3io.png"
              alt="FeedUp"
            />
          </div>

          <div className="content">

            <h3>
              Присоединяйтесь к команде FeedUp —
              ведущий фастфуд, который ценит
              своих сотрудников!
            </h3>

            <p>
              Мы рады пригласить на работу как опытных
              профессионалов, так и новичков.
              В нашей сети ресторанов быстрого питания
              есть открытые вакансии на позиции поваров,
              кассиров и курьеров.
            </p>

            <h4>Почему мы?</h4>

            <p>
              <strong>Более 25 лет на рынке.</strong>
              {" "}Мы гордимся долгой историей успешной
              работы и стабильностью.
            </p>

            <p>
              <strong>Гибкий график работы.</strong>
              {" "}Мы понимаем, что у каждого сотрудника
              есть свои личные обстоятельства.
            </p>

            <p>
              <strong>Конкурентоспособная заработная плата.</strong>
              {" "}Мы ценим ваш труд и предлагаем
              достойную оплату.
            </p>

            <p>
              <strong>
                Перспективы карьерного роста
                и профессионального обучения.
              </strong>
              {" "}В FeedUp всегда можно развиваться.
            </p>

            <p>
              <strong>
                Комфортные условия труда
                и дружный коллектив.
              </strong>
              {" "}Мы создаем комфортную атмосферу.
            </p>

            <h4>Как присоединиться к нам?</h4>

            <p>
              Если вы заинтересованы в работе
              в одной из лучших сетей фастфуда —
              свяжитесь с нами по телефону
              <strong> +998 93 801-00-06</strong>
            </p>

          </div>

          <div className="button-wrapper">
            <button
              className="apply-btn"
              onClick={() => setOpen(true)}
            >
              Оставить заявку
            </button>
          </div>

        </div>

      </div>

      {open && (
        <div className="modal-overlay">

          <div className="modal">

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <h2>Оставить заявку</h2>

            <form>

              <div className="form-grid">

                <select>
                  <option>Выберите вакансию*</option>
                  <option>Повар</option>
                  <option>Кассир</option>
                  <option>Курьер</option>
                </select>

                <select>
                  <option>Выберите тип занятости*</option>
                  <option>Полная занятость</option>
                  <option>Частичная занятость</option>
                </select>

                <input
                  type="text"
                  placeholder="Имя*"
                />

                <input
                  type="text"
                  placeholder="Фамилия*"
                />

                <input type="date" />

                <div className="gender-box">

                  <span>Выберите пол</span>

                  <label>
                    <input type="radio" name="gender" />
                    Мужчина
                  </label>

                  <label>
                    <input type="radio" name="gender" />
                    Женщина
                  </label>

                </div>

                <input
                  type="text"
                  placeholder="Номер телефона*"
                />

                <input
                  type="email"
                  placeholder="E-mail"
                />

                <input
                  className="full"
                  type="text"
                  placeholder="Город проживания*"
                />

                <textarea
                  className="full"
                  rows="4"
                  placeholder="О себе*"
                ></textarea>

                <textarea
                  className="full"
                  rows="4"
                  placeholder="Почему вы хотите работать у нас?*"
                ></textarea>

                <input
                  className="full"
                  type="file"
                />

              </div>

              <button className="submit-btn">
                Отправить заявку
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
}
}
