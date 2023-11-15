"use client"
import {Combobox, Transition} from "@headlessui/react"
import Image from "next/image"

interface SearchManufacturerProps {
  manufacturer: string,
  setManufacturer: (manufacturer:string) => void
}

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">

            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="logo"
            />

          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
