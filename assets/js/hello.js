import React from "react";

export default React.createClass({
  openModal : function(){

    console.log("modale modale");

    $('.ui.basic.modal')
        .modal('show');
  },
 render: function() {
   return (
     <div>
     <button className="ui button" id="test" onClick={this.openModal}>Open Modal</button>
     <div className="ui basic modal">
       <i className="close icon"></i>
       <div className="header">
         Archive Old Messages
       </div>
       <div className="image content">
         <div className="image">
           <i className="archive icon"></i>
         </div>
         <div className="description">
           <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
         </div>
       </div>
       <div className="actions">
         <div className="two fluid ui inverted buttons">
           <div className="ui cancel red basic inverted button">
             <i className="remove icon"></i>
             No
           </div>
           <div className="ui ok green basic inverted button">
             <i className="checkmark icon"></i>
             Yes
           </div>
         </div>
       </div>
     </div>
     </div>
   );
 },
});
