import { FC } from "react";
import { Helmet } from "react-helmet-async";

interface MetadataProps {
  title?: string;
  description?: string;
  img?: string;
  url?: string;
}

const Metadata: FC<MetadataProps> = (props) => {
  const { title, description, img, url } = props;
  let titleWithPrefix = title ? `Quakker | ${title}` : "Quakker";
  return (
    <Helmet>
      <title>{titleWithPrefix}</title>
      <meta name="description" content={description} />
      <meta name="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={img} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="Quakker" />
      <meta name="twitter:creator" content="@vistor31" />
    </Helmet>
  );
};

export default Metadata;
