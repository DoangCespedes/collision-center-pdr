import { useState } from 'react'; 
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Importa Axios

const Form = () => {
  const [seguro, setSeguro] = useState(false);
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    console.log("Datos del formulario:", data);

    try {
      // Realiza la solicitud POST
      const response = await axios.post('http://localhost:3030/api/usuarios', {
        nombre: data.user_name,
        telefono: data.phone_number,
        correo: data.user_email,
        yearCar: data.year,
        makeCar: data.make,
        modelCar: data.model,
        vin_number: data.vin_number,
        service: data.service,
        message: data.message,
        consent: data.consent,
        role: 'USER_ROLE', // Si deseas usar un rol específico por defecto
      });
      await axios.post('http://localhost:3030/api/emails/send-code', { email: response.data.usuario.correo });
      await axios.post('http://localhost:3030/api/emails/send-user', { usuario: response.data.usuario });

      alert('Formulario enviado exitosamente');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario');
    }

    reset(); // Limpia el formulario después de enviar
  };

  const handleSwitchChange = (value) => {
    setSeguro(value);
    setValue('seguro', value); 
  };

  return (
    <div className="container mt-2">
      <form onSubmit={handleSubmit(onSubmit)} className="row gy-3">
        {/* Sección 1: Datos personales del cliente */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-3">
            <h5 className="card-title">Información Personal</h5>
            <div className="mb-3">
              <label htmlFor="user_name" className="form-label">Nombre completo</label>
              <input type="text" className="form-control" placeholder="Nombre completo" {...register('user_name', { required: "Este campo es obligatorio" })} />
              {errors.user_name && <p className="text-danger">{errors.user_name.message}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="phone_number" className="form-label">Número de teléfono</label>
              <input type="tel" className="form-control" placeholder="Número de teléfono" {...register('phone_number', { required: "Este campo es obligatorio", minLength: { value: 7, message: "El número es muy corto" }, maxLength: { value: 15, message: "El número es muy largo" } })} />
              {errors.phone_number && <p className="text-danger">{errors.phone_number.message}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="user_email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" placeholder="nombre@ejemplo.com" {...register('user_email', { required: "Este campo es obligatorio", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Correo electrónico inválido" } })} />
              {errors.user_email && <p className="text-danger">{errors.user_email.message}</p>}
            </div>
          </div>
        </div>

        {/* Sección 2: Características del vehículo */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-3">
            <h5 className="card-title">Detalles del Vehículo</h5>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">Año</label>
              <input type="number" className="form-control" placeholder="Año" {...register('year', { required: "Este campo es obligatorio", min: { value: 1900, message: "Año inválido" }, max: { value: new Date().getFullYear(), message: "Año inválido" } })} />
              {errors.year && <p className="text-danger">{errors.year.message}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="make" className="form-label">Marca</label>
              <input type="text" className="form-control" placeholder="Marca" {...register('make', { required: "Este campo es obligatorio" })} />
              {errors.make && <p className="text-danger">{errors.make.message}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="model" className="form-label">Modelo</label>
              <input type="text" className="form-control" placeholder="Modelo" {...register('model', { required: "Este campo es obligatorio" })} />
              {errors.model && <p className="text-danger">{errors.model.message}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="vin_number" className="form-label">Número VIN</label>
              <input type="tel" className="form-control" placeholder="Número VIN" {...register('vin_number', { minLength: { value: 3, message: "VIN muy corto" }, maxLength: { value: 17, message: "VIN muy largo" } })} />
              {errors.vin_number && <p className="text-danger">{errors.vin_number.message}</p>}
            </div>
          </div>
        </div>

        {/* Sección 3: Tipo de servicio */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-3">
            <h5 className="card-title">Tipo de Servicio</h5>
            <label htmlFor="service" className="form-label">Servicios</label>
            <select className="form-select" {...register('service', { required: "Este campo es obligatorio" })}>
              <option value="">Selecciona un servicio</option>
              <option value="PDR">Reparación sin pintura (PDR)</option>
              <option value="Door Ding">Puerta abollada</option>
              <option value="Collision">Colisión</option>
              <option value="Detailing">Detallado</option>
            </select>
            {errors.service && <p className="text-danger">{errors.service.message}</p>}

            <div className="mb-3 mt-3">
              <label htmlFor="message" className="form-label">Describe el daño</label>
              <textarea className="form-control" rows="3" {...register('message', { required: "Este campo es obligatorio" })}></textarea>
              {errors.message && <p className="text-danger">{errors.message.message}</p>}
            </div>

            {/* Switch entre seguro o cartera */}
            <div className="form-check form-switch">
              <label className="form-check-label" htmlFor="seguroSwitch">Usar seguro</label>
              <input
                className="form-check-input"
                type="checkbox"
                id="seguroSwitch"
                checked={seguro}
                onChange={() => handleSwitchChange(true)}
              />
            </div>

            <div className="form-check form-switch mt-3">
              <label className="form-check-label" htmlFor="carteraSwitch">Pagar de mi bolsillo</label>
              <input
                className="form-check-input"
                type="checkbox"
                id="carteraSwitch"
                checked={!seguro}
                onChange={() => handleSwitchChange(false)}
              />
            </div>

            {/* Campo oculto para capturar el valor de seguro */}
            <input type="hidden" {...register('seguro')} />

            {seguro && (
              <div className="mt-3">
                <label htmlFor="claim_number" className="form-label">Número de Reclamo</label>
                <input type="tel" className="form-control" placeholder="Número de Reclamo" {...register('claim_number', { minLength: { value: 3, message: "Número de reclamo inválido" }, maxLength: { value: 17, message: "Número de reclamo inválido" } })} />
                {errors.claim_number && <p className="text-danger">{errors.claim_number.message}</p>}
              </div>
            )}

            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" {...register('consent', { required: "Debes aceptar para continuar" })} />
              <label className="form-check-label" htmlFor="consent">
                Acepto recibir llamadas y mensajes de texto sobre el servicio de mi vehículo.
              </label>
              {errors.consent && <p className="text-danger">{errors.consent.message}</p>}
            </div>
          </div>
        </div>

        {/* Botón de enviar */}
        <div className="col-12">
          <button type="submit" className="btn btn-secondary btn-lg w-10" disabled={isSubmitting}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
