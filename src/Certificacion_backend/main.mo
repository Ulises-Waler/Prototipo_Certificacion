import Array "mo:base/Array";

actor CarroList {

  type MyTuple = (Nat, Text);

  type Carro = {
    id : Nat;
    name : Text;
    description : Text;
    speed : Nat;
  };

  var carros : [Carro] = [
    {
      id = 1;
      name = "Delorean";
      description = "Automovil que se utiliza en la trilogía de Volver al Futuro";
      speed = 180;
    }
  ];

  public func addCarro(speed : Nat, description : Text, name : Text) : async Bool {
    let newid = Array.size(carros) + 1;
    let newCarro = {
      id = newid;
      name = name;
      description = description;
      speed = speed;
    };
    carros := Array.append<Carro>(carros, [newCarro]);
    return true;
  };

  public func getAllCarros() : async [Carro] {

    return carros;

  };

  //Salta un error
  public func getCarroById(id : Nat) : async ?Carro {
    return Array.find<Carro>(carros, func(m) { m.id == id });
  };

  public func updateCarro(id : Nat, name : Text, speed : Nat, description : Text) : async Bool {
    let carroToUpdate = Array.find<Carro>(carros, func(task) { task.id == id });

    switch (carroToUpdate) {
      case (null) { return false };
      case (?carroToUpdate) {
        let updatedCarro = {
          id = id;
          name = name;
          description = description;
          speed = speed;
        };
        carros := Array.map<Carro, Carro>(carros, func(m) { if (m.id == id) { updatedCarro } else { m } });
        return true;
      };
    };
  };

  public func deleteCarro(id : Nat) : async Bool {
    let carro = Array.find<Carro>(carros, func(task) { task.id != id });
    if (carro != null) {
      carros := Array.filter<Carro>(carros, func(task) { task.id != id });
      return true;
    } else {
      return false;
    };
  };
};
