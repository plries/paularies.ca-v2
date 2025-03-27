import { NAVBAR_CONST } from "./const";
import { ButtonLink, IconButton } from "../";

export const NavBar = () => {
  return (
    <header className="bg-greyscale-[#f0f0f080] border-greyscale-100 w-f sticky top-0 left-0 m-3 flex flex-row items-center justify-between rounded-3xl border-[1px] p-3 text-base backdrop-blur-md md:text-lg lg:text-xl">
      <nav className="contents">
        <span className="dark:text-greyscale-50 inline-block">
          <NAVBAR_CONST.LOGO.STAR />
        </span>
        <ul className="flex flex-row gap-2">
          {NAVBAR_CONST.LINKS.map(({ HREF, TEXT }) => (
            <li key={TEXT}>
              <ButtonLink href={HREF} theme="tertiary">
                {TEXT}
              </ButtonLink>
            </li>
          ))}
          <IconButton
            // onClick={toggleTheme}
            icon={<NAVBAR_CONST.LIGHT_DARK.ICON />}
            theme="secondary"
            name={NAVBAR_CONST.LIGHT_DARK.TEXT}
            additionalClasses={["h-full"]}
          />
          <IconButton
            // onClick={email}
            icon={<NAVBAR_CONST.CONTACT.ICON />}
            theme="primary"
            name={NAVBAR_CONST.CONTACT.TEXT}
            additionalClasses={["h-full"]}
          />
        </ul>
      </nav>
    </header>
  );
};
