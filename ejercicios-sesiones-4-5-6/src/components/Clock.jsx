import React, { useState, useEffect } from 'react';

// Partiendo del siguiente componente de clase que contempla varios métodos de ciclo de vida, convertidlo en un componente funcional que realice exactamente lo mismo:
// class Clock extends Component {
//    constructor(props) {
//       super(props);
//       // Estado privado del component
//       this.state = {
//          // Se genera una fecha como estado inicial del componente
//          fecha: new Date(),
//          edad: 0,
//          nombre: "Martín",
//          apellidos: "San José"
//       };
//    }
//    componentDidMount(){
//       this.timerID = setInterval (
//          () => this.tick(), 1000
//       );
//    }
//    componentWillUnmount() {
//       clearInterval (this.timerID);
//    }
//    render() {
//       return (
//          <div>
//          <h2>
//          Hora Actual:
//          {this.state.fecha.toLocaleTimeString()}
//          </h2>
//          <h3>{this.state.nombre} {this.state.apellidos}</h3>
//          <h1>Edad: {this.state.edad}</h1>
//          </div>
//       )
//    }
//    tick(){
//       this.setState((prevState) => {
//          let edad = prevState.edad +1;
//          return {
//             ...prevState,
//             fecha: new Date(),
//             edad
//          }
//       });
//    }
// }

const Clock = () => {

   const [user, setUser] = useState({
      fecha: new Date(),
      edad: 0,
      nombre: "Gabriel",
      apellidos: "Rea"
   });

   useEffect(() => {

      const timerId = setInterval(() => {
         tick()
      }, 1000)

      return () => {
         clearInterval(timerId)
      }

   }, [])

   const tick = () => {
      setUser((user) => {

         let edad = user.edad + 1;
         return{
            ...user,
            fecha: new Date(),
            edad
         }

      })
   }
   

   return(
      <div>
         <h2>Hora Actual:{user.fecha.toLocaleTimeString()}</h2>          
         <h3>{user.nombre} {user.apellidos}</h3>
         <h1>Edad: {user.edad}</h1>
      </div>
   )

}

export default Clock;