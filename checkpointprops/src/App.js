
import './App.css';
import ProfileComponent from './profile/ProfileComponent';

function App() {

  return (
    <div className="App">

      <ProfileComponent 

      name="Vincent Van-Gogh" 
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ekhDtjfbUjaE4HAGsizdqtFEbBnCPZGcmg&usqp=CAU"
      bio="Dutch painter, generally considered the greatest, and one of the greatest of the Post-Impressionists" 
      profession="painter" />

    </div>
  );
}

export default App;
