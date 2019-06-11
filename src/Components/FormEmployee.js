import React from "react";

class FormEmployee extends React.Component {


   state = {
      name: '',
      poster: '',
      comment: '',
    }

onChange(e) {
  this.setState({
    [e.target.name]: e.target.value,
  });
 }

 submitForm(e) {
  e.preventDefault();
 }

render() {

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(this.state),
   };
  
   const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
  
  fetch(url, config)
  .then(res => res.json())
   .then(res => {
     if (res.error) {
       alert(res.error);
     } else {
       alert(`film ajouté avec l'ID ${res}!`);
     }
   }).catch(e => {
     console.error(e);
     alert('Erreur lors de l\'ajout d\'un film');
   });
  return (
      <div className="FormEmployee">
 <h1>Saisie d'un film</h1>

 <form onSubmit={this.submitForm}>
   <fieldset>
     <legend>Informations</legend>
     <div className="form-data">
       <label htmlFor="name">Nom du film</label>
       <input
         type="text"
         id="name"
         name="name"
         onChange={this.onChange}
         value={this.state.name}
       />
     </div>

     <div className="form-data">
       <label htmlFor="poster">URL Movie</label>
       <input
         type="text"
         id="poster"
         name="poster"
         onChange={this.onChange}
         value={this.state.poster}
       />
     </div>

     <div className="form-data">
       <label htmlFor="comment">Com</label>
       <input
         type="textarea"
         id="text"
         name="comment"
         onChange={this.onChange}
         value={this.state.comment}
       />
     </div>
     <hr />
     <div className="form-data">
       <input type="submit" value="Envoyer" />
     </div>
   </fieldset>
 </form>
</div>
  );
}
}

  export default FormEmployee;