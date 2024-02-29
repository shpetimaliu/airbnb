import countries from "world-countries";

const countriesFormatted = countries.map((item) => ({
  value: item.cca2,
  label: item.name.common,
  flag: item.flag,
  latLang: item.latlng,
  region: item.region,
}));

export const useCountries = () => {
  const getAllCountries = () => countriesFormatted;
  const getCountriesByValue = (value: string) => {
    return countriesFormatted.filter((item) => item.value === value);
  };

  return {
    getAllCountries,
    getCountriesByValue,
  };
};
