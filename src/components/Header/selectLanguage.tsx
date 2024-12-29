/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';
import { Globe } from 'lucide-react';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SelectLanguage = () => {
  const [open, setOpen] = React.useState(false);
  const [lang, setlang] = React.useState('en');
  const languages = [
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'fr',
      label: 'French',
    },
  ];
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="paragraph-medium-medium w-[145px] justify-between"
          aria-expanded={open}
        >
          <Globe className="h-24 w-24" strokeWidth={2} />
          <div className="flex items-center gap-2">
            {lang && lang == 'en' ? 'English' : 'Francais'}
            <ChevronsUpDown className="opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[145px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={(currentLang) => {
                    setlang(currentLang === lang ? '' : currentLang);
                    setOpen(false);
                  }}
                  className="paragraph-medium-regular"
                >
                  {language.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      lang === language.value ? 'opacity-100' : 'opacity-0'
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
};

export default SelectLanguage;
