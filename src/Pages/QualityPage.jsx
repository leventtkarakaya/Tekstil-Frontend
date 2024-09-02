import React, { useState } from "react";
import BG from "/QualityBG.jpg";
import style from "./Css/Quality.module.css";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

export default function QualityPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClikcArrow = (direction) => {
    setActiveIndex(direction === 0 ? 0 : 1);
  };
  return (
    <>
      <div className={style.QualityPage}>
        <div className={style.QualityPageWrapper}>
          {/* Content */}
          <div>
            <img src={BG} alt="" />
          </div>
          {/* Content */}
          <div className={style.QualityPageContentText}>
            <div className={style.QualityPageContentTextList1}>
              <h3>MİSYONUMUZ</h3>
              <p>
                Tekstil sektörünün vazgeçilmezi olan Kalite Kontrol, Aker
                Tekstil’in Altın Oran felsefesiyle zirveye ulaşmıştır. Burada
                ürün, henüz prototip aşamasında dahi olsa "Kalite Güvence
                Departmanı" tarafından titizlikle incelenir. Gerekli uyarılar
                yapıldıktan sonra kalıp çıkarılır ve üretim süreçleri
                başlatılır. Doğru malzeme seçimi, doğru üretim tekniklerinin
                kullanılması sağlanarak ürün üzerinde meydana gelebilecek
                istenmeyen olası bir durum en baştan engellenir. Numune üretimi
                sırasında karşılaşılan problemler üretim aşamasına ışık tutar ve
                elde edilen raporlar sayesinde sorunsuz bir üretim aşamasına
                zemin hazırlanmış olur.
              </p>
            </div>
            <div className={style.QualityPageContentTextList2}>
              {activeIndex === 0 ? (
                <p>
                  Üretimin her aşamasında detaylı bir kalite kontrol çalışması
                  gerçekleştirilmektedir. Numune aşamasından ürünün paketlenme
                  aşamasına kadar yapılan kalite kontrol çalışmalarını aşağıda
                  görebilirsiniz. NUMUNE AŞAMASINDA: 1.Güvence kontrolü, 2.Kalıp
                  kontrolü, 3.Dikim içi ve sonrası kontrolü, 4.Yıkama
                  aşamasındaki kontroller, 5.Paketleme aşamasındaki kontroller
                  en ince detayına kadar incelenerek yapılır.
                </p>
              ) : (
                <p>
                  ÜRETİM AŞAMASINDA: 1. Planlamada; aksesuar, kumaş gibi
                  etkenlerin kontrolü, 2. Modelhanede; kalıp, ölçü ve çekme
                  değerlerin kontrolü, 3. Kesimhane’de; pastal ve kumaş
                  kontrolü, 4. Kesim yapıldıktan sonra kesim ve kumaş defosu
                  ayıklama kontrolü, 5. Fason takipçisi ve ürün sorumlusu
                  tarafından dikim anı ve sonrasındaki (adım ayarından tüm
                  ölçülere kadar her bir ürünün detaylı) kontrol ve raporları,
                  6. Yıkama aşamasında her aşamanın kalite kontrolleri özenle
                  yapılır ve böylelikle ortaya çıkabilecek bir problem büyümeden
                  düzeltilir. Ayrıca bölümlerin bünyesinde bulunan kalite
                  kontrolcülere ilave olarak, yıkama fason takipçileri ve ürün
                  sorumluları da gerekli kontrolleri yaparak raporlarlar.
                </p>
              )}
            </div>
            <div>
              <button
                onClick={() => handleClikcArrow(0)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                <FaCircleArrowLeft
                  style={{ fontSize: "30px", color: "#f26b30" }}
                />
              </button>
              <button
                onClick={() => handleClikcArrow(1)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                <FaCircleArrowRight
                  style={{ fontSize: "30px", color: "#f26b30" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
