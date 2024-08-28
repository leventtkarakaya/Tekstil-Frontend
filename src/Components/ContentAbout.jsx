import React from "react";
import style from "./Css/ContentAbout.module.css";
export default function ContentAbout() {
  return (
    <>
      <div className={style.ContentAbout}>
        <div className={style.ContentAboutContent}>
          {/* Content */}
          <div className={style.ContentAboutContentGrid1}>
            <h3>MİSYON</h3>
            <p>
              Ürün ve hizmet kalitemizi sürekli geliştirerek müşterilerimizin
              taleplerini en üst düzeyde karşılıyor ve beklentilerini aşıyoruz.
            </p>
            <h3>VİZYON</h3>
            <p>
              Denim sektörünün önde gelen firmaları arasında yer almak. Doğaya
              zarar vermeden geleceğe kaliteli ürünler üretmek için teknolojiyi
              en iyi şekilde kullanmak.
            </p>
          </div>
          {/* Content */}
          <div className={style.ContentAboutContentGrid2}>
            <h3>DEĞERLERİMİZ</h3>
            <p>Adalet</p>
            <p>Özveri</p>
            <p>Esnaklik</p>
            <p>Ruh</p>
            <p>Yenilikçilik</p>
            <p>Sürdürebilirlik</p>
          </div>
          {/* Content */}
          <div className={style.ContentAboutContentGrid3}>
            <h3>SOSYAL SORUMLULUK</h3>
            <p>
              İnsan sağlığına ve insan haklarına saygı duymak. Çevreye ve
              topluma duyarlı olmak. Şirketimizde nitelikli ve gelişime açık
              insan kaynağından yararlanmak.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
