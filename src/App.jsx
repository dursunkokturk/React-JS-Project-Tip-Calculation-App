import './App.css'

export default function App() {

  return (
    <>
      <div className="general-title">
        <h1>BAHŞİŞ HESAPLAYICI</h1>
      </div>
      <div className="container">
        <div className="left">
          <div className="form-group">
            <h4>Hesap</h4>
            <div className="input-box">
              <span className='icon'>₺</span>
              <input type="text" placeholder='Ücret Giriniz' />
            </div>
          </div>
          <div className="tip-select-group">
            <h4>Bahşiş Oranı Seç %</h4>
            <div className="tip-group">
              <label htmlFor="">% 5</label>
              <label htmlFor="">% 10</label>
              <label htmlFor="">% 15</label>
              <label htmlFor="">% 25</label>
              <label htmlFor="">% 50</label>
              <label htmlFor="" className='custom'>Özel</label>
            </div>
          </div>
        </div>
        <div className="right">

        </div>
      </div>
    </>
  )
}