class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }




  
 

  
  tick () {
    if (this.name === "Aged Brie"){
      this.agedBrie();
    } else if (this.name ==="Sulfuras, Hand of Ragnaros"){
      this.Sulfuras()
    } else if (this.name ==="Conjured Mana Cake"){
      this.conjured();
    } else if (this.name === "Backstage passes to a TAFKAL80ETC concert"){
      this.backstage();
    } else {
      this.normal();
    }

  }
  normal () {
    this.sellIn--;
    if (this.sellIn > 0) {
      this.quality = this.quality - 1;
    } else {
      this.quality = this.quility - 2;
    }
    if (this.quality < 0){
      this.quality = 0;
    }

  }

conjured () {
      this.sellIn--;
    
    if (this.sellIn >= 0) {
        this.quality = this.quality -= 2;
    } else { 
        this.sellIn < 0
        this.quality = this.quality -= 4;
   }
    if (this.quality < 0) {
        this.quality = 0;
    }
  }
    




agedBrie () {
    this.sellIn--;
    
    if (this.sellIn > 0) {
        this.quality = this.quality += 1;
    
    } else if (this.sellIn <= 0){
      this.quality = this.quility += 2;
    
    } if (this.quality > 50) {
       this.quality = 50;
    }
  }
Backstage () {
    this.sellIn--;

    
    
  }

  Sulfuras () {
  }
}

export { GildedRose };
