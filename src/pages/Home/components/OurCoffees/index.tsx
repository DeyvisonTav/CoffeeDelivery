import { FormEvent, OptionHTMLAttributes, useEffect, useState } from "react";
import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer, SelectCoffeesSearch } from "./styles";

export function OurCoffees() {
  const [search, setSearch] = useState<string>("");

  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <SelectCoffeesSearch>
        <select onChange={(e: any) => setSearch(e.target.value)}>
          <option value="">Selecione seu café</option>
          <option value="TRADICIONAL">Tradicional</option>
          <option value="ESPECIAL">Especial</option>
        </select>
      </SelectCoffeesSearch>
      <CoffeeList>
        {coffees
          .filter(
            (val) => search === "" || val.tags.includes(search.toLowerCase())
          )
          .map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
      </CoffeeList>
    </OurCoffeesContainer>
  );
}
