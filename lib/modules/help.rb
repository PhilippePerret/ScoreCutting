module ScoreCutting
  class CommandLine
    def self.show_help
      clear
      less ScoreCutting::AIDE_SCORE_CUTTING
    end
  end #/class CommandLine

AIDE_SCORE_CUTTING = <<-TEXT
Aide ScoreCutting
=================

Cette app permet de découper une partition en systèmes.

Utilisation
-----------

* Ouvrir une fenêtre de Terminal au dossier contenant la partition
  originale.
* jouer la commande #{'score-cutting'.jaune}
> La partition s'ouvre dans le navigateur
* choisir les lignes de découpes en double-cliquant aux endroits
  voulus
* cliquer sur le bouton "Découper" et confirmer.
> La partition est découpée et les systèmes sont placés dans un
  dossier 'systems' au même niveau que la partition.

À partir de plusieur partition
------------------------------

Lorsqu'il y a plusieurs PDF pour la partition, régler le numéro du
premier système pour qu'il reparte au bon numéro : par exemple, si
le dernier système produit par la partition précédente était le 
système 7 alors commencer au 8e système pour la nouvelle partition.

TEXT

end #/module ScoreCutting
