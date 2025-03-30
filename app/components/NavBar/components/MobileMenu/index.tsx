import { Button, IconButton } from "@/app/components";
import { NAVBAR_CONST } from "../../const";
import { useMobileMenu } from "./useMobileMenu";

export const MobileMenu = ({}) => {
  const hook = useMobileMenu();

  return (
    <>
      <IconButton
        onClick={hook.toggleMenu}
        icon={
          <>
            <span
              className={`absolute !transition-all duration-700 ease-in-out ${hook.isOpen ? "scale-100" : "scale-0 opacity-0"}`}
            >
              <NAVBAR_CONST.MOBILE_MENU.OPEN.ICON />
            </span>
            <span
              className={`absolute !transition-all duration-700 ease-in-out ${!hook.isOpen ? "scale-100" : "scale-0 opacity-0"}`}
            >
              <NAVBAR_CONST.MOBILE_MENU.CLOSED.ICON />
            </span>
          </>
        }
        theme="primary"
        name={
          hook.isOpen
            ? NAVBAR_CONST.MOBILE_MENU.OPEN.TEXT
            : NAVBAR_CONST.MOBILE_MENU.CLOSED.TEXT
        }
        additionalClasses={[
          `!transition-all duration-700 ease-in-out ${hook.isOpen ? "rotate-90 " : "rotate-0"}`,
        ]}
      />
      <ul
        className={`border-greyscale-100 shadow-nav-bar text-greyscale-950 bg-greyscale-50 absolute left-0 w-full rounded-3xl border-[1px] !transition-all duration-700 ease-in-out ${hook.isOpen ? "top-full mt-4" : "-top-full -translate-y-full"} `}
      >
        {NAVBAR_CONST.LINKS.map(({ HREF, TEXT }) => (
          <li
            key={TEXT}
            className="border-greyscale-100 flex justify-end border-b-[1px] last:border-0"
          >
            <Button href={HREF} theme="tertiary" isLink>
              {TEXT}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
