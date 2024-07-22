import { PrivacyPolicy } from "@/config/constants/PrivacyPolicy"
import Link from "next/link"

export const Privacy_Policy = () => {

  return (
    <div>
      <ul className="flex items-center ">
        {
          PrivacyPolicy.map((item, i) => (
            <li className="mr-[15px] last:mr-0" key={i}>
              <Link className="text-[13px] font-medium text-lightGray" href={item.href}>{item.title}</Link>
          </li>
          ))
        }
      </ul>
    </div>
  )
}
