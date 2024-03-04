import React from "react";
import Image from "next/image";
import Link from "next/link";

const UpdateRecap = ({ latestRecaps }) => {
  const sortedEntities = latestRecaps.slice().sort((a, b) => b.id - a.id);
  const slicedEntities = sortedEntities.slice(0, 5);

  const baseUrl = "https://testrapi.bintangsempurna.co.id/";
  return (
    <>
      <div className="NewsRelease_section py-5">
        <h1 className="artikel-detail_tittle text-left">
          Update Recap terbaru
        </h1>
        {slicedEntities.map((data) => (
          <>
            <Link
              style={{ cursor: "pointer" }}
              href={`/events/event-recap/${data.id}/${data.attributes.slug}`}
            >
              <div className="cardRelease mb-3">
                <div className="d-flex align-items-center m-3">
                  <div className="flex-shrink-0">
                    <Image
                      className="newUpdate"
                      src={`${baseUrl}${data.attributes.image.data.attributes.formats.small.url.substring(
                        1
                      )}`}
                      alt={data.attributes.alt}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3 text-left ">
                    <div className="d-flex flex-row ">
                      <div className=" text-Published mb-2">
                        {new Date(data.attributes.createdAt).toLocaleDateString(
                          "id-ID",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            weekday: "long", // Menambahkan hari
                          }
                        )}
                      </div>
                    </div>
                    <h2 className=" text_news">
                      {data.attributes.title.slice(0, 70)}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default UpdateRecap;
