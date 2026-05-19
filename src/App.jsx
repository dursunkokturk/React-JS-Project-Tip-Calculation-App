import PersonLogo from './assets/img/logo-person.png'
import './App.css'
import { useState } from 'react';

export default function App() {

  const [bill, setBill] = useState("");
  const [personNumber, setPersonNumber] = useState("");
  const [tipRate, setTipRate] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [personError, setPersonError] = useState(false);
  const [personTouched, setPersonTouched] = useState(false);

  const tipOptions = [5, 10, 15, 25, 50];

  const handleTipSelect = (rate) => {
    setTipRate(rate);
    setIsCustom(false);
    setCustomTip("");
  };

  const handleCustomClick = () => {
    setIsCustom(true);
    setTipRate("");
  };


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
              <input
                type="text"
                value={bill}
                placeholder='0'
                onChange={(e) => {
                  const value = e.target.value;
                  setBill(value);
                }}
              />
            </div>
          </div>
          <div className="tip-select-group">
            <h4>Bahşiş Oranı Seç %</h4>
            <div className="tip-group">
              {tipOptions.map((rate) => (
                <button
                  key={rate}
                  className={[tipRate === rate && !isCustom ? 'active' : '', isCustom ? 'passive': ''].filter(Boolean).join(' ')}
                  onClick={() => handleTipSelect(rate)}
                  disabled={isCustom}
                >
                  %{rate}
                </button>
              )
              )}
              {isCustom ? (
                <input
                  type="number"
                  className="custom-input"
                  placeholder="Özel %"
                  value={customTip}
                  min="0"
                  autoFocus
                  onChange={(e) => {
                    setCustomTip(e.target.value);
                    setTipRate(Number(e.target.value));
                  }}
                />
              ) : (
                <button
                  className='custom'
                  onClick={handleCustomClick}
                >
                  Özel
                </button>
              )}
            </div>
          </div>
          <div className="form-group">
            <div className="label-error">
              <h4>Kişi Sayısı</h4>
              {personTouched && personError && (
                <span>0 olamaz</span>
              )}
            </div>
            <div className={`input-box ${personTouched && personError ? 'error' : ''}`}>
              <img src={PersonLogo} className='icon' alt="" />
              <input
                type="text"
                placeholder='0'
                value={personNumber}
                onChange={(e) => {
                  const value = e.target.value;
                  setPersonNumber(value);
                  setPersonTouched(true);

                  if (value === "" || Number(value) <= 0) {
                    setPersonError(true);
                  } else {
                    setPersonError(false);
                  }
                }}
              />

            </div>
          </div>
        </div>
        <div className="right">
          <div className="tip-text-and-tip-amount">
            <div className="tip-text">
              <h4>Bahşiş Miktarı</h4>
              <span>/ Kişi</span>
            </div>
            <div className="input-box">
              <span className='icon'>₺</span>
              <label htmlFor="">0.00</label>
            </div>
          </div>
          <div className="tip-text-and-tip-amount">
            <div className="tip-text">
              <h4>Toplam Miktar</h4>
              <span>/ Kişi</span>
            </div>
            <div className="input-box">
              <span className='icon'>₺</span>
              <label htmlFor="">0.00</label>
            </div>
          </div>
          <div className="reset">
            <button>SIFIRLA</button>
          </div>
        </div>
      </div>
    </>
  )
}