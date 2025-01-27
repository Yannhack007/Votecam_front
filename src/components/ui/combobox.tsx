'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface DropDownData {
  name: string;
  id: string | number;
}

interface ComboBoxProps {
  dropdownValue: string;
  setDropdownValue: React.Dispatch<React.SetStateAction<string>>;
  dropdownData: DropDownData[];
  error: string;
  type: string;
}

export function ComboboxDemo({
  dropdownData,
  dropdownValue,
  setDropdownValue,
  error,
  type,
}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`${open ? `ring-1 ring-primaryGreen-500` : ``} ${
            error ? `border-redTheme ring-0` : ``
          } ${
            type === 'région' ? 'rounded-full w-[180px]' : 'w-full'
          } text-paragraph-medium font-medium -tracking--1% text-customBlack-500 h-[40px] justify-between focus-visible:ring-1 focus-visible:ring-primaryGreen-500`}
        >
          {dropdownValue ? (
            dropdownData.find((data) => data?.name === dropdownValue)?.name
          ) : type === 'région' ? (
            <span className="text-customBlack-500">Toutes les régions</span>
          ) : (
            <span className="text-customGrey-500">
              {/* {`Sélectionner ${type}...`} */}
            </span>
          )}

          {/* <ChevronsUpDown className="opacity-50" /> */}
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={`${
          type == 'région'
            ? 'w-[250px]'
            : type === ''
            ? 'w-[400px]'
            : 'min-w-[398px] max-sm:w-full'
        }
        `}
      >
        <Command>
          <CommandInput placeholder={`Rechercher ${type}...`} className="" />
          <CommandList>
            <CommandEmpty>{`No ${type} found.`}</CommandEmpty>
            <CommandGroup>
              {dropdownData.map((data) => (
                <CommandItem
                  key={data.id}
                  value={data.name}
                  onSelect={(currentValue) => {
                    setDropdownValue(
                      currentValue === dropdownValue ? '' : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  {data.name}
                  <Check
                    className={cn(
                      'ml-auto',
                      dropdownValue === data.name ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
