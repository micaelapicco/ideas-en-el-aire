import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import React from "react";

const Programming = () => {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="programming">
        <Tab key="lunes" title="Lunes">
          <Card>
            <CardBody>
              programación del lunes 
            </CardBody>
          </Card>
        </Tab>

        <Tab key="martes" title="Martes">
          <Card>
            <CardBody>
              programación del Martes 
            </CardBody>
          </Card>
        </Tab>

        <Tab key="miércoles" title="Miércoles">
          <Card>
            <CardBody>
              programación del Miércoles 
            </CardBody>
          </Card>
        </Tab>

        <Tab key="jueves" title="Jueves">
          <Card>
            <CardBody>
              programación del Jueves 
            </CardBody>
          </Card>
        </Tab>

        <Tab key="viernes" title="Viernes">
          <Card>
            <CardBody>
              programación del Viernes 
            </CardBody>
          </Card>
        </Tab>

        <Tab key="sábado" title="Sábado">
          <Card>
            <CardBody>
              programación del Sábado 
            </CardBody>
          </Card>
        </Tab>

        <Tab key="domingo" title="Domingo">
          <Card>
            <CardBody>
              programación del Domingo 
            </CardBody>
          </Card>
        </Tab>

        </Tabs>
    </div>
  );
};

export default Programming;
