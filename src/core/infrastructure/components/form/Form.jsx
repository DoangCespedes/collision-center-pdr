
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    emailjs.sendForm('service_8lu6llw', 'template_r5qub8o', form.current, 'Sv1FponG5Anp4MxYU')
      .then((result) => {
        console.log("RESULTADO EXITOSO", result.text);
      }, (error) => {
        console.log("ERROR", error.text);
      });

    console.log(data)


    reset(); // Limpia el formulario después de enviar
  };

  return (
    <div className="container mt-2">
      <form onSubmit={handleSubmit(onSubmit)} className="row gy-3">
        {/* Sección 1: Datos personales del cliente */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-3">
            <h5 className="card-title">Personal Information</h5>
            <div className="mb-3">
              <label htmlFor="user_name" className="form-label">Full name</label>
              <input type="text" className="form-control" placeholder="Full name" {...register('user_name', { required: true })} />
              {errors.user_name && <p className="text-danger">This field is required</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="phone_number" className="form-label">Phone number</label>
              <input type="tel" className="form-control" placeholder="Phone number" {...register('phone_number', { required: true, minLength: 7, maxLength: 15 })} />
              {errors.phone_number && <p className="text-danger">Enter a valid phone number</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="user_email" className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="name@example.com" {...register('user_email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
              {errors.user_email && <p className="text-danger">Enter a valid email</p>}
            </div>
          </div>
        </div>

        {/* Sección 2: Características del vehículo */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-3">
            <h5 className="card-title">Vehicle Details</h5>

            <div className="mb-3">
              <label htmlFor="year" className="form-label">Year</label>
              <input type="number" className="form-control" placeholder="Year" {...register('year', { required: true, min: 1900, max: new Date().getFullYear() })} />
              {errors.year && <p className="text-danger">Enter a valid year</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="make" className="form-label">Make</label>
              <input type="text" className="form-control" placeholder="Make" {...register('make', { required: true })} />
              {errors.make && <p className="text-danger">This field is required</p>}
            </div>
            
            <div className="mb-3">
              <label htmlFor="model" className="form-label">Model</label>
              <input type="text" className="form-control" placeholder="Model" {...register('model', { required: true })} />
              {errors.model && <p className="text-danger">This field is required</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="vin_number" className="form-label">VIN number</label>
              <input type="tel" className="form-control" placeholder="VIN number" {...register('vin_number', { minLength: 3, maxLength: 17 })} />
              {errors.vin_number && <p className="text-danger">Enter a valid vin number</p>}
            </div>
          </div>
        </div>

        {/* Sección 3: Tipo de servicio */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-3">
            <h5 className="card-title">Service Type</h5>
            <label htmlFor="service" className="form-label">Services</label>
            <select className="form-select" {...register('service', { required: true })}>
              <option value="">Select a service</option>
              <option value="PDR">Paintless Dent Repair (PDR)</option>
              <option value="Door Ding">Door Ding</option>
              <option value="Collision">Collision</option>
              <option value="Detailing">Detailing</option>
            </select>
            {errors.service && <p className="text-danger">This field is required</p>}

            <div className="mb-3 mt-3">
              <label htmlFor="message" className="form-label">Describe the damage</label>
              <textarea className="form-control" rows="3" {...register('message', { required: true })}></textarea>
              {errors.message && <p className="text-danger">This field is required</p>}
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" {...register('consent', { required: true })} />
              <label className="form-check-label" htmlFor="consent">
                I consent to receiving calls & text messages from Collision Center & PDR regarding the service for my vehicle.
              </label>
              {errors.consent && <p className="text-danger">You must agree to continue</p>}
            </div>
          </div>
        </div>

        {/* Botón de enviar */}
        <div className="col-12">
          <button type="submit" className="btn btn-secondary btn-lg w-10">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;