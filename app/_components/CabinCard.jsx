import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-primary-800 border">
      <div className="flex-1 relative">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="grow">
        <div className="pt-5 pb-4 px-7 bg-primary-900">
          <h3 className="text-primary font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-accent-500">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-500 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-500 py-4 px-6 inline-block hover:bg-accent-300 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
