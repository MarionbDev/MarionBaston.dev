import { Heading } from "@react-email/components";
import { Container } from "@react-email/container";
import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";

const capitalizeFirstLetter = (value) =>
  value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

const formatPhoneNumber = (phone) => {
  return phone.replace(/(\d{2})(?=\d)/g, "$1 "); // Adds a space after every two digits
};

const EmailTemplate = ({ firstname, lastname, email, message, phone }) => (
  <Tailwind>
    <Html>
      <Container className="max-w-[580px] bg-white">
        <h1 className="font-title-home text-title_color italic font-extralight text-[1.5rem] tracking-[3px]">
          Le Plessis Aux Lys
        </h1>
        <Heading as="h3" className=" font-medium">
          Vous avez reçu un nouveau message,
        </Heading>
        <section>
          <Text className="text-[14px]">
            {capitalizeFirstLetter(firstname)} {capitalizeFirstLetter(lastname)}
          </Text>
          <Text className="text-[14px]">
            {" "}
            Email :{" "}
            <a href={`mailto:${email}`} className="text-blue-500">
              {email}
            </a>
          </Text>
          <Text className="text-[14px]">
            Téléphone : {formatPhoneNumber(phone)}
          </Text>
        </section>
        <section>
          <Text className=" leading-7 text-[14px]">
            {capitalizeFirstLetter(message)}
          </Text>
        </section>
      </Container>
    </Html>
  </Tailwind>
);

export default EmailTemplate;
