import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useQuery } from "@tanstack/react-query";

type Country = {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
  };
  area: number;
};

export default function Countries() {
  //   const countryQuery = useFetch<Country[]>(
  //     "https://restcountries.com/v3.1/all"
  //   );

  // Cara pake tanstack query
  const countryQuery = useQuery({
    queryFn: () => {
      return axios.get<Country[]>("https://restcountries.com/v3.1/all");
    },
    queryKey: ["countries"], // Sama kaya dependency array useEffect
  });

  const countryQuery2 = useQuery({
    queryFn: () => {
      return axios.get<Country[]>("https://restcountries.com/v3.1/name/ind");
    },
    queryKey: ["country-ind"], // harus beda kalo semisal url nya beda
  });

  //Derived State
  //DATA.DATA -> lihat useFetch yang setData(data.data)
  const countryData = countryQuery.data?.data;

  if (countryQuery.isLoading) {
    return <div>Is loading... </div>;
  }

  //Loading State -> kalo udh kelar maka ke return yang bawah
  if (!countryData) return <div>No Data Found</div>;

  return (
    <div>
      {countryData.map((country, index) => {
        return (
          <li key={index}>
            <img src={country.flags.svg} alt="" />
            <p>{country.name.common}</p>
            <p>{country.area}</p>
          </li>
        );
      })}
    </div>
  );
}
