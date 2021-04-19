interface ILatLangDTO {
  latitude: number;
  longitude: number;
}
export const getHaversineDistance = (
  targetLatLng: ILatLangDTO,
  originLatLng: ILatLangDTO
): number => {
  const R = 3958.8; // Radius of the Earth in miles
  const rlat1 = targetLatLng.latitude * (Math.PI / 180); // Convert degrees to radians
  const rlat2 = originLatLng.latitude * (Math.PI / 180); // Convert degrees to radians
  const difflat = rlat2 - rlat1; // Radian difference (latitudes)
  const difflon =
    (originLatLng.longitude - targetLatLng.longitude) * (Math.PI / 180); // Radian difference (longitudes)

  const d =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(difflat / 2) * Math.sin(difflat / 2) +
          Math.cos(rlat1) *
            Math.cos(rlat2) *
            Math.sin(difflon / 2) *
            Math.sin(difflon / 2)
      )
    );
  return d;
};
