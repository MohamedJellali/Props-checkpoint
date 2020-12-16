import './App.css';
import ProfileComponent from './profile/ProfileComponent';
import handelName from './profile/ProfileComponent'

function App() {

  return (
    <div className="App">

      <ProfileComponent 
      name="Vincent Van-Gogh" 
      bio="Dutch painter, generally considered the greatest, and one of the greatest of the Post-Impressionists" 
      profession="painter" 
      handelName={handelName}
      > 
      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ekhDtjfbUjaE4HAGsizdqtFEbBnCPZGcmg&usqp=CAU" alt="Van-gogh" height="420" style={{marginBottom : 20, marginTop : 10, borderRadius:17}} />
      </div>
      </ProfileComponent>

    </div>
  );
}

export default App;
