const staticRoutes = [
  "",
  "/about",
  "/mission",
  "/philosophy",
  "/team",
  "/programs",
  "/grow-program",
  "/techsistars-program",
  "/widei-program",
  "/widib-program",
  "/community-ambassadors-program",
  "/impact",
  "/involve",
  "/partners",
  "/stories",
  "/blog",
  "/hiqmat-story",
];

export default function sitemap() {
  const siteUrl = "https://paahibuspace.org";
  const lastModified = new Date();

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
