import Environment from "../../../../utils/Environment";

enum enumVersion {
  Development = "Development",
  Production = "Production",
}

export default async function credentials() {
  const versionType: enumVersion = enumVersion.Development;
  let paymentAccessToken;
  let version;
  if (versionType === enumVersion.Development) {
    paymentAccessToken = Environment.get("PAYMENTACCESSTOKEN");
    version = "0.0.0.1";
  }
  console.log({
    paymentAccessToken,
    version,
    versionType,
  });
  return { paymentAccessToken, version, versionType };
}
