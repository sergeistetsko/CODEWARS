function excludingVatPrice(price){
    return price===null?-1:Number((price/1.15).toFixed(2));
  }