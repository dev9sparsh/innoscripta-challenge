import { useEffect, useState } from "react";
import axios from "axios";

const useFetchApi = (query,category,source,date) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let dateString = date;
  let removedash = dateString.replace(/-/g, "");

  const getCurrentDateFormatted = (publishDate) => {
    const date = new Date(publishDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };
// eslint-disable-next-line 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const api1 = "80e09183-ebd4-4542-a2c2-efadd748152e";
        const api2 = "9b8e2954faea4b89888b27d382c4aad5";
        const api3 = "cRS2RIl5IIom1fZAt2oUPadTkibFsMT4";

        const [response1, response2, response3] = await Promise.all([
          axios.get(
            `https://content.guardianapis.com/search?q=${source?source:query}${category&&`&section=${category}`}${date&&`&from-date=${date}`}${date&&`&to-date=${date}`}&page=1&api-key=${api1}&show-fields=thumbnail&show-fields=all`
          ),
          axios.get(
            `${query?`https://newsapi.org/v2/everything?q=${query}${date&&`&from=${date}`}${date&&`&to=${date}`}&apiKey=${api2}`:
            `https://newsapi.org/v2/top-headlines?category=${category}${source&&`&source=${source}`}${date&&`&from=${date}`}${date&&`&to=${date}`}&country=us&apiKey=${api2}`}`
          ),
          axios.get(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}${category&&`&fq=news_desk:(${category})`}${source&&`&fq=source:(${source})`}${date&&`&begin_date=${removedash}`}${date&&`&end_date=${removedash}`}&api-key=${api3}`
          )
        ]);
       
        const transformedData1 = response1?.data?.response?.results?.map(
          (item) => ({
            id: item?.sectionId,
            type: item?.type,
            sectionId: item?.sectionId,
            sectionName: item?.sectionName,
            webPublicationDate: getCurrentDateFormatted(item?.webPublicationDate),
            webTitle: item?.webTitle,
            webUrl: item?.webUrl,
            apiUrl: item?.apiUrl,
            isHosted: item?.isHosted,
            pillarId: item?.pillarId,
            pillarName: item?.pillarName,
            description: item?.fields?.bodyText,
            imageUrl: item?.fields?.thumbnail,
            author:item?.author,
            source:item?.source
          })
        );
        const transformedData2 = response2?.data?.articles?.map((item) => ({
          id: item?.source?.id,
          type: "article",
          sectionId: item?.source?.id,
          sectionName: null,//there is no category in search
          webPublicationDate: getCurrentDateFormatted(item?.publishedAt),
          webTitle: item?.title,
          webUrl: item?.url ,
          apiUrl: null,
          isHosted: false,
          pillarId: "pillar/news",
          pillarName: "News",
          description: item?.description,
          imageUrl: item?.urlToImage,
          author:item?.author,
          source:item?.source?.name
        }));

        const transformedData3 = response3?.data?.response?.docs?.map((item) => ({
          id: item?._id,
          type: item?.type_of_material ,
          sectionId: item?._id ,
          sectionName: item?.section_name ,
          webPublicationDate: getCurrentDateFormatted(item?.pub_date) ,
          webTitle: item?.headline?.main ,
          webUrl: item?.web_url ,
          apiUrl: item?.uri ,
          isHosted: item?.isHosted ,
          pillarId: "pillar/news",
          pillarName: "News",
          description: item?.abstract ,
          imageUrl: `https://static01.nyt.com/${item?.multimedia[0]?.url}` ,
          author:item?.byline?.original,
          source:item?.source
        }));
         
        const combined = [...(transformedData1 || []), ...(transformedData2 || []), ...(transformedData3 || [])];
        setData(combined);
      } catch (error) {
        console.log(error);
      }
      finally{
        setLoading(false)
      }
      
    };

     fetchData();
  // eslint-disable-next-line 
  }, [query,category,source,date]);
  


  return { data,setData ,loading,setLoading};
};

export default useFetchApi;
