'use strict';
class UIClass {

  showBoutonsConfirmation(){
    UI.showButtonConfirmer()
    UI.showButtonRenoncer()    
  }
  hideBoutonsConfirmation(){
    UI.hideButtonConfirmer()
    UI.hideButtonRenoncer()
  }

  showButtonConfirmer(){this.btnConfirmer.classList.remove('invisible')}
  hideButtonConfirmer(){this.btnConfirmer.classList.add('invisible')}
  showButtonRenoncer(){this.btnRenoncer.classList.remove('invisible')}
  hideButtonRenoncer(){this.btnRenoncer.classList.add('invisible')}



  // Pour placer le panneau d'information avec le texte +texte+
  showInformation(texte){
    this.panneauInformation.querySelector('.content').innerHTML = texte
    this.panneauInformation.classList.remove('hidden')
  }
  hidePanneauInformation(){
    this.panneauInformation.classList.add('hidden') 
  }

  // Pour afficher le message +msg+
  showMessage(msg){
    this.panneauMessage.innerHTML = msg
    this.panneauMessage.className = 'notice'
    this.panneauMessage.classList.remove('hidden')
  }
  // Pour afficher une erreur (utiliser la méthode 'error')
  showError(err){
    this.panneauMessage.innerHTML = err
    this.panneauMessage.className = 'error'
    this.panneauMessage.classList.remove('hidden')
  }

  hideMessage(){
    this.panneauMessage.innerHTML = ""
    this.panneauMessage.classList.add('hidden')
  }

  // Appelée quand on double-clic sur la partition
  onDoubleClickOnScore(e){
    //console.log("e = ", e)
    LigneCoupe.createAt(e.layerY) // NON : clientY
  }

  // Retourne les lignes de coupe
  getTopsOfLignesCoupe(){
    var ls = []
    document.querySelectorAll('div.ligne_coupe').forEach(div => {
      ls.push(unpx(div.style.top))
    })
    return ls.sort(function(a, b) {return a - b});
  }




  get btnConfirmer(){
    return this._btnconfirm || (this._btnconfirm = document.querySelector('button#confirmer_decoupe'))
  }
  get btnRenoncer(){
    return this._btncancel || (this._btncancel = document.querySelector('button#renoncer_decoupe'))
  }
  get score(){return this._score || (this._score = document.querySelector('img#score'))}
  get codeField(){
    return this._codefield || (this._codefield = document.querySelector('textarea#code_decoupe'))
  }
  get panneauInformation(){
    return this._infopanel || (this._infopanel = document.querySelector('div#panneau_information'))
  }
  get panneauMessage(){
    return this._msgpanel || (this._msgpanel = document.querySelector('div#message'))
  }

}
const UI = new UIClass()
