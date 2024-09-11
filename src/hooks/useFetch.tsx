import axios from "axios";
import { useEffect, useState } from "react";

// GENERIC -> SAMA KEK PARAMETER DI FUCNTION TAPI BUAT TYPE

export default function useFetch<DataType>(URL: string) {
  // Kalo mau fetching harus selalu di useEffect
  // Biar cuma fetching di awal aja. (pas component mounting)

  const [data, setData] = useState<DataType>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      // Asynchrounous Function -> sebuah kerjaan yang butuh waktu lama
      // contoh contoh -> setTimeout, setInternal, fetch , axios.get, axios.post, ....

      //Race condition -> situasi ketika data yang di request belakangan dateng duluan
      try {
        setIsLoading(true);

        // "Throw"-ing an error
        const data = await axios.get<DataType>(URL);
        setData(data.data);
      } catch (error) {
        //Kalo gak pake try catch, ketika api nya error nanti aplikasi crash
        setError(error);

        // Kode yang selalu bakal di jalanin walaupun crash / sukses
      } finally {
        setIsLoading(false);
      }

      getCountries();
    };
  }, [URL]);

  return { data, error, isLoading };
}
