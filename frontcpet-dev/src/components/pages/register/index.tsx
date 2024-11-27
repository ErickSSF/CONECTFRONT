/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group"
import { api } from "../../../api/api"
import useAuth from "../../../hooks/auth"
import { toast } from "sonner"


function RegisterComponent() {
  const { user } = useAuth();

  const [owner, setOwner] = useState({
    name: '',
    cpf: '',
    city: '',
    tel: '',
    email: '',
  });
  const [animal, setAnimal] = useState({
    name: '',
    specie: '',
    birthday: '',
    color: '',
    size: 'pequeno',
    breed: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([] as string[]);

  const handleOwner = (field: keyof typeof owner, value: string) => {
    setOwner({
      ...owner,
      [field]: value
    })
  }

  const handleAnimal = (field: keyof typeof animal, value: string) => {
    setAnimal({
      ...animal,
      [field]: value
    })
  }

  const createPet = async () => {
    setLoading(true);
    setErrors([]);

    try {

      const result = await api.post('/pets', {
        nome: animal?.name,
        especie: animal?.specie,
        dataNascimento: animal?.birthday,
        raca: animal?.breed,
        cor: animal?.color,
        porte: animal?.size
      }, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      });

      createOwner(result?.data)
    } catch (err: any) {
      setErrors(Object.values(err?.response?.data?.errors?.body))
      setLoading(false)
    }
  };

  const createOwner = async (petId: string) => {
    try {
      await api.post('/proprietarios', {
        nomeCompleto: owner?.name,
        petId,
        cpf: owner?.cpf,
        telefone: owner?.tel,
        email: owner?.email,
        cidade: owner?.city,
      }, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      });

      setOwner({
        name: '',
        cpf: '',
        city: '',
        tel: '',
        email: '',
      });
      setAnimal({
        name: '',
        specie: '',
        birthday: '',
        color: '',
        size: 'pequeno',
        breed: '',
      })

      toast("Cadastrado com sucesso!")

    }
    catch (err: any) {
      setErrors(Object.values(err?.response?.data?.errors?.body))
    }
    finally {
      setLoading(false)
    }


  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      createPet()
    }} className="w-full flex flex-col gap-4">
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <div className="border-2 rounded-lg p-6 flex flex-col gap-4  items-center justify-center">
          <h2 className="text-2xl font-bold">Proprietario</h2>
          <div className="w-[150px] h-[150px] rounded-full bg-gray-200 "></div>
          <Input
            disabled={loading}
            placeholder="Nome"
            className=""
            required
            onChange={(e) => handleOwner('name', e?.target?.value)}
            value={owner.name}
          />
          <Input
            disabled={loading}
            placeholder="CPF"
            className=""
            type="number"
            required
            onChange={(e) => handleOwner('cpf', e?.target?.value)}
            value={owner.cpf}
          />
          <Input
            disabled={loading}
            placeholder="Tel"
            className=""
            required
            type="number"
            onChange={(e) => handleOwner('tel', e?.target?.value)}
            value={owner.tel}

          />
          <Input
            disabled={loading}
            placeholder="Email"
            className=""
            required
            type="email"
            onChange={(e) => handleOwner('email', e?.target?.value)}
            value={owner.email}

          />
          <Input
            disabled={loading}
            placeholder="Cidade"
            className=""
            required
            onChange={(e) => handleOwner('city', e?.target?.value)}
            value={owner.city}

          />


        </div>
        <div className="flex flex-col gap-4 border-2 rounded-lg p-6 justify-between">
          <div className="flex flex-col items-baseline">
            <h2 className="text-2xl font-bold">Cadastro Animal</h2>
            <p className="font-semibold text-gray-500">Dados Básicos</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              value={animal.name}
              disabled={loading}
              required
              placeholder="Nome"
              className=""
              onChange={(e) => handleAnimal('name', e?.target?.value)}

            />
            <Input
              value={animal.specie}
              disabled={loading}
              required
              placeholder="Espécie"
              className=""
              onChange={(e) => handleAnimal('specie', e?.target?.value)}

            />
            <Input
              value={animal.birthday}
              disabled={loading}
              required
              placeholder="Data de Nascimento"
              className=""
              onChange={(e) => handleAnimal('birthday', e?.target?.value)}

              type="date"
            />
            <Input
              value={animal.color}
              disabled={loading}
              required
              placeholder="Cor"
              className=""
              onChange={(e) => handleAnimal('color', e?.target?.value)}

            />
            <div className="flex flex-col gap-4 ">

              <Input
                value={animal.breed}
                disabled={loading}
                required
                placeholder="Raça"
                className=""
                onChange={(e) => handleAnimal('breed', e?.target?.value)}

              />
              <RadioGroup defaultValue="comfortable"

              >
                <Label className="text-sm text-gray-700">Porte:</Label>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1"
                    onClick={() => handleAnimal('size', 'pequeno')}
                    checked={animal?.size == "pequeno"}

                  />
                  <Label htmlFor="r1" className="text-sm text-gray-500">Pequeno</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2"
                    onClick={() => handleAnimal('size', 'medio')}
                    checked={animal?.size == "medio"}
                  />
                  <Label htmlFor="r2" className="text-sm text-gray-500">Médio</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3"
                    onClick={() => handleAnimal('size', 'grande')}
                    checked={animal?.size == "grande"}
                  />
                  <Label htmlFor="r3" className="text-sm text-gray-500">Grande</Label>
                </div>
              </RadioGroup>
            </div>
            <span />
            <div>
              {!!errors?.length && errors.map((error, index) => {
                return <p key={index} className="text-sm font-bold text-rose-500">{error}</p>
              })}</div>
          </div>
          <div className="flex justify-end">
            <Button className="w-[200px]" type="submit" disabled={loading}>{loading ? "Loading ..." : "Register"}</Button>
          </div>
        </div>
      </div>
    </form>
  )
}
export default RegisterComponent