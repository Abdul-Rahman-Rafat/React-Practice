import Student from "./Student";  

function App() {
  return(
    <>
    <Student name="Abdo" age={24} grade={100} isStudent={true} />
    <Student name="Ahmed" age={30} grade={100} isStudent={false} />
    <Student name="Moha" age={28} grade={100} isStudent={true} />
    <Student />
    </>
     
  );
}

export default App
